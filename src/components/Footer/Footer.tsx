import React from 'react';
import { navBar } from '../Header/Header';

const socialMedias = [
  { id: 1, name: 'Portfolio', link: 'https://lucal-portfolio.vercel.app/' },
  { id: 2, name: 'Linkedin', link: 'https://www.linkedin.com/in/lu%C3%ADs-carlos-723a28165/' },
  { id: 3, name: 'Github', link: 'https://github.com/Lucal22' },
];

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="mt-6 h-full border-t-[1px] border-slate-300 px-2 pb-4 text-slate-500 dark:border-darkbg dark:bg-darknav">
      <div className="my-0 mx-auto flex max-w-[500px] justify-between  py-10 text-[14px] tablets:text-base">
        <div>
          <ul>
            {socialMedias.map((item) => (
              <li
                key={item.id}
                className="mb-4 text-center hover:text-blue-500 dark:hover:text-blue-500 "
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {navBar.map((item) => (
              <li
                key={item.id}
                className="mb-4 text-center hover:text-blue-500 dark:hover:text-blue-500"
              >
                <a href={item.route}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center text-[12px] text-slate-500">
        <p>Copyright © {year}</p>
        <p>
          Feito por{' '}
          <a href="https://lucal-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
            <span className=" text-slate-500">Lucal</span>
          </a>{' '}
          :)
        </p>
      </div>
    </div>
  );
}
