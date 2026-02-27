import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DiscordActivity {
  name: string;
  details?: string;
  state?: string;
  type: number;
  large_image_url?: string;
  small_image_url?: string;
}

interface DiscordPresence {
  status: string;
  custom_status?: string;
  activity?: DiscordActivity;
  avatar_url?: string;
  username: string;
}

interface NowPlaying {
  source: string;
  is_playing: boolean;
  title: string;
  artist: string;
  album: string;
  album_art_url?: string;
  track_url?: string;
  progress_ms?: number;
  duration_ms?: number;
}

interface PresenceData {
  discord: DiscordPresence | null;
  spotify: NowPlaying | null;
}

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080';

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / 60000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'online': return '#23a55a';
    case 'idle': return '#f0b232';
    case 'dnd': return '#f23f43';
    default: return '#80848e';
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case 'online': return 'En ligne';
    case 'idle': return 'Inactif';
    case 'dnd': return 'Ne pas déranger';
    default: return 'Hors ligne';
  }
}

export default function PresenceCard({ visible }: { visible: boolean }) {
  const [data, setData] = useState<PresenceData | null>(null);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchPresence = async () => {
    try {
      const resp = await fetch(`${API_BASE}/api/presence`);
      if (resp.ok) setData(await resp.json());
    } catch (err) {
      console.warn('Failed to fetch presence:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (visible) {
      fetchPresence();
      intervalRef.current = setInterval(fetchPresence, 15000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [visible]);

  const discord = data?.discord;
  const spotify = data?.spotify;
  const statusColor = getStatusColor(discord?.status || 'offline');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute top-[calc(100%+12px)] right-0 w-[320px] bg-[rgba(18,18,20,0.95)] backdrop-blur-[20px] border border-border rounded-xl p-4 z-[1000] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0, 1] }}
        >
          {/* Arrow */}
          <div className="presence-arrow" />

          {loading ? (
            <div className="flex items-center justify-center py-6">
              <div className="w-5 h-5 border-2 border-border border-t-text-secondary rounded-full animate-[spin_0.8s_linear_infinite]" />
            </div>
          ) : (
            <>
              {/* Discord */}
              {discord && (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {discord.avatar_url ? (
                      <div className="relative shrink-0">
                        <img src={discord.avatar_url} alt={discord.username} className="w-11 h-11 rounded-full object-cover" />
                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-[2.5px] border-[rgba(18,18,20,0.95)]" style={{ backgroundColor: statusColor }} />
                      </div>
                    ) : (
                      <div className="relative w-11 h-11 rounded-full bg-border shrink-0">
                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-[2.5px] border-[rgba(18,18,20,0.95)]" style={{ backgroundColor: statusColor }} />
                      </div>
                    )}
                    <div className="flex flex-col min-w-0">
                      <span className="text-[0.85rem] font-semibold text-text-primary truncate">{discord.username}</span>
                      <span className="text-[0.7rem] font-medium" style={{ color: statusColor }}>{getStatusLabel(discord.status)}</span>
                    </div>
                  </div>

                  {discord.custom_status && (
                    <p className="text-[0.72rem] text-text-muted italic mb-3 pl-1">"{discord.custom_status}"</p>
                  )}

                  {/* Activity */}
                  {discord.activity && (
                    <div className="flex items-center gap-3 p-2.5 bg-white/3 rounded-lg mb-2">
                      <div className="relative shrink-0">
                        {discord.activity.large_image_url && (
                          <img src={discord.activity.large_image_url} alt="" className="w-12 h-12 rounded-lg object-cover" />
                        )}
                        {discord.activity.small_image_url && (
                          <img src={discord.activity.small_image_url} alt="" className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-bg-card object-cover" />
                        )}
                      </div>
                      <div className="flex flex-col min-w-0 gap-0.5">
                        <span className="text-[0.78rem] font-semibold text-text-primary truncate">{discord.activity.name}</span>
                        {discord.activity.details && <span className="text-[0.68rem] text-text-secondary truncate">{discord.activity.details}</span>}
                        {discord.activity.state && <span className="text-[0.68rem] text-text-muted truncate">{discord.activity.state}</span>}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Separator */}
              {discord && spotify && <div className="h-px bg-border my-3" />}

              {/* Spotify */}
              {spotify && spotify.is_playing && (
                <div>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    <span className="text-[0.65rem] uppercase tracking-[0.08em] text-text-muted font-medium">Écoute sur Spotify</span>
                  </div>
                  <div className="flex items-center gap-3 mb-2.5">
                    {spotify.album_art_url && (
                      <img src={spotify.album_art_url} alt={spotify.album} className="w-12 h-12 rounded-md object-cover shrink-0" />
                    )}
                    <div className="flex flex-col min-w-0 gap-0.5">
                      <span className="text-[0.78rem] font-semibold text-text-primary truncate">
                        {spotify.track_url ? (
                          <a href={spotify.track_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{spotify.title}</a>
                        ) : spotify.title}
                      </span>
                      <span className="text-[0.7rem] text-text-secondary truncate">{spotify.artist}</span>
                      <span className="text-[0.65rem] text-text-muted truncate">{spotify.album}</span>
                    </div>
                  </div>
                  {spotify.progress_ms != null && spotify.duration_ms != null && (
                    <div>
                      <div className="w-full h-[3px] bg-white/8 rounded-full overflow-hidden">
                        <div className="progress-fill h-full bg-[#1DB954] rounded-full" style={{ width: `${(spotify.progress_ms / spotify.duration_ms) * 100}%` }} />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-[0.6rem] text-text-muted tabular-nums">{formatTime(spotify.progress_ms)}</span>
                        <span className="text-[0.6rem] text-text-muted tabular-nums">{formatTime(spotify.duration_ms)}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Empty */}
              {!discord && !spotify && (
                <div className="flex items-center justify-center py-4">
                  <span className="text-[0.75rem] text-text-muted">Impossible de récupérer la présence</span>
                </div>
              )}

              {discord && !discord.activity && !spotify && (
                <div />
              )}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
