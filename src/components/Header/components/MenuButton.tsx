import React, { useState } from 'react';
import { SunDim, Moon, GithubLogo, List, X } from 'phosphor-react';
import { navBar } from '../Header';
import { useTheme } from 'next-themes';

export default function MenuButton() {
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div>
        <List
          arial-label="Abre menu mobile"
          onClick={() => {
            setMenu(true);
          }}
          className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-500"
          size={32}
        />
      </div>
      {menu === true ? (
        <div className=" absolute top-0 right-0 h-96 w-48 border-l-[0.5px] border-b-[0.5px] border-slate-300 bg-white  dark:border-darkbg dark:bg-darknav">
          <div className="pt-4 pl-2">
            <div>
              <X
                name="Fecha menu mobile"
                onClick={() => {
                  setMenu(false);
                }}
                className="absolute right-0 mr-6 cursor-pointer hover:text-blue-500 dark:hover:text-blue-500"
                size={32}
              />
            </div>
            <ul className="mb-40">
              {navBar.map((item, key) => {
                return (
                  <li key={key} className="mt-1 mb-6">
                    <a href={item.route}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
            <div>
              <button
                aria-label="botão do tema"
                className="mb-6 hover:text-blue-500 dark:hover:text-blue-500"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' ? (
                  <SunDim aria-label="Mudar para tema escuro" size={25} />
                ) : (
                  <Moon aria-label="Mudar para tema claro" size={25} />
                )}
              </button>
              <div>
                <a
                  className="hover:text-blue-500 dark:hover:text-blue-500"
                  href="https://github.com/Lucal22/so-today"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo aria-label="Botão para página do github" size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
