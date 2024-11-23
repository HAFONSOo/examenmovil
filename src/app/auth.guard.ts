import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = getAuth();

  return new Promise<boolean>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true); // Usuario autenticado
      } else {
        router.navigate(['/login']); // Redirige a la página de inicio de sesión
        resolve(false); // Bloquea el acceso a la ruta protegida
      }
    });
  });
};
