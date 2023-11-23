import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
	{
		path: '',
		component: PrincipalComponent
	},
	{
		path: 'dashboard',
		loadChildren: (): Promise<typeof DashboardModule> =>
			import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
