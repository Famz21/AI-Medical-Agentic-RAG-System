import { ModeToggle } from '@/components/modetoggle'
import { Button } from '@/components/ui/button'
import { DrawerTrigger } from '@/components/ui/drawer'
import React from 'react'
import { Drawer } from 'vaul'

type Props = {}

const HomeComponent = (props: Props) => {
  return (
    <div className='grid h-screen -w-full'>
      <div className='flex flex-col'>
        <header className="sticky top-0 z-10 flex h-[57px] bg-background items-center gap-1 border-b px-4">
          <h1 className='text-xl font-semibold text-[#D90013]'>AI Medical Q&A</h1>
          <div className='w-full flex flex-row justify-end gap-2'>
            <ModeToggle />
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant={'outline'} size={'icon'}></Button>
              </DrawerTrigger>
            </Drawer>
          </div>
        </header>
      </div>
    </div>
  )
}

export default HomeComponent