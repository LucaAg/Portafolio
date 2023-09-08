import {trigger, state, style, transition, animate} from '@angular/animations';


export const deslizarIzqADerAnimacion = trigger('entrarIzqADer', [
    state('void', style({ transform: 'translateX(-100%)' })),
    transition(':enter', [
        animate('0.3s ease-in', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
    ])
]);

export const bounceIn = trigger('bounceIn', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);


export const fadeInOut =  trigger('fadeInOut', [
  transition(':increment', [
    style({ opacity: 0, transform: 'translateX(20px)' }),
    animate('1000ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition(':decrement', [
    style({ opacity: 0, transform: 'translateX(-20px)' }),
    animate('1000ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
])
