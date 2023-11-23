import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './core/components/custom-layout/custom-layout.component';
import { PrincipalModule } from './modules/principal/principal.module';

const routes: Routes = [
  // Otros módulos cargados por lazy
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: 'principal',
				loadChildren: (): Promise<typeof PrincipalModule> =>
					import('./modules/principal/principal.module').then((m) => m.PrincipalModule),
      },
      {
        path: '**',
				redirectTo: 'principal'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
