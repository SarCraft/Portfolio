import { DiscordLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'; 

function MediaButtonHome() {
    return (
      <section className='sm:-mt-14 shrink-0 max-sm:mt-4 max-sm:justify-center sm:justify-start max-sm:w-auto flex mx-auto w-1/2'>
        <section className='flex-col bg-[#161616] rounded-lg shadow-lg overflow-hidden text-white w-auto gap-1 p-2'>
          <div className='flex gap-1'>
            <ButtonIcon href='https://github.com/SarCraft'>
              <GitHubLogoIcon className="h-4 w-4" />
            </ButtonIcon>
            <ButtonIcon href='https://www.linkedin.com/in/nathan-henaux-427b11223/'>
              <LinkedInLogoIcon className="h-4 w-4" />
            </ButtonIcon>
            <span className="block">
              <svg xmlns="http://www.w3.org/2000/svg" className='max-sm:stroke-1 sm:stroke-2 w-5 h-10 stroke-current' viewBox="0 0 24 24" fill="none">
                <path stroke="none" fill="none"></path>
                <path d="M12 5v14"></path>
              </svg>
            </span>
            <ButtonIcon href='https://discord.gg/8YH4ZVJ'>
              <DiscordLogoIcon className="h-4 w-4" />
            </ButtonIcon>
          </div>
        </section>
      </section>
    );
  }

export { MediaButtonHome }