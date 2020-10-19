import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePage} from "./page/home/home.page";
import {DownloadPage} from "./page/download/download.page";
import {MenuPage} from "./page/menu.page";
import {LearnPage} from "./page/learn/learn.page";

const routes: Routes = [
	{
		path: '',
		component: MenuPage,
		children: [
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				component: HomePage
			},
			{
				path: 'download',
				component: DownloadPage
			},
			{
				path: 'learn',
				component: LearnPage
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Router { }
