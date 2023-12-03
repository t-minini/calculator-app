import React from 'react';
import style from './CalcScreen.module.css';

export function CalcScreen({ calculation = '', theme }) {
  const displayValue = calculation || '0';

  return (
    <section className={`${style.screenContainer} ${style[theme]}`}>
      <div className={`${style.screen} ${style[theme]}`}>{displayValue.replace('.', ',')}</div>
    </section>
  );
}
