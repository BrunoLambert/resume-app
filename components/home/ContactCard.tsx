import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { Mail, PhoneCall, MessageCircle, Linkedin, Github } from '@geist-ui/icons';
import * as React from 'react';

const ContactCard: React.FunctionComponent = () => {
  return (<Card className='mt-5 normal-text'>
    <CardHeader className='block text-center lg:text-start my-2'>
      <b>Meus contatos</b>
    </CardHeader>
    <Divider />
    <CardBody className='p-5 flex flex-row justify-center gap-4 flex-wrap'>
      <div className='flex justify-center items-center'>
        <a className='underline pointer' href="mailto:brunofsclambert@gmail.com">
          <div
            className='flex flex-col items-center justify-center bg-secondary p-2 rounded-full border-2 border-white transition-all hover:bg-primary'
            style={{ width: 125, height: 125 }}>
            <Mail className='flex' />
            <p className='flex font-bold mt-2 text-sm'>
              Email
            </p>
          </div>
        </a>
      </div>

      <div className='flex justify-center items-center'>
        <a className='underline pointer' href='tel:+5511948560966'>
          <div
            className='flex flex-col items-center justify-center bg-secondary p-2 rounded-full border-2 border-white transition-all hover:bg-primary'
            style={{ width: 125, height: 125 }}>
            <PhoneCall className='flex' />
            <p className='flex font-bold mt-2 text-sm'>
              Phone
            </p>
          </div>
        </a>
      </div>

      <div className='flex justify-center items-center'>
        <a className='underline pointer' href="https://wa.me/+5511948560966/?text=Hey, Bruno!" target='_blank'>
          <div
            className='flex flex-col items-center justify-center bg-secondary p-2 rounded-full border-2 border-white transition-all hover:bg-primary'
            style={{ width: 125, height: 125 }}>
            <MessageCircle className='flex' />
            <p className='flex font-bold mt-2 text-sm'>
              Whatsapp
            </p>
          </div>
        </a>
      </div>

      <div className='flex justify-center items-center'>
        <a className='underline pointer' href="https://www.linkedin.com/in/brunoflambert/" target='_blank'>
          <div
            className='flex flex-col items-center justify-center bg-secondary p-2 rounded-full border-2 border-white transition-all hover:bg-primary'
            style={{ width: 125, height: 125 }}>
            <Linkedin className='flex' />
            <p className='flex font-bold mt-2 text-sm'>
              LinkedIn
            </p>
          </div>
        </a>
      </div>

      <div className='flex justify-center items-center'>
        <a className='underline pointer' href="https://github.com/BrunoLambert" target='_blank'>
          <div
            className='flex flex-col items-center justify-center bg-secondary p-2 rounded-full border-2 border-white transition-all hover:bg-primary'
            style={{ width: 125, height: 125 }}>
            <Github className='flex' />
            <p className='flex font-bold mt-2 text-sm'>
              GitHub
            </p>
          </div>
        </a>
      </div>
    </CardBody>
  </Card>);
}

export default ContactCard;