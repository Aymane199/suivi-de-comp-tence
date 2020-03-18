import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'quiz-etudiant2',
    loadChildren: () => import('./quiz-etudiant2/quiz-etudiant2.module').then( m => m.QuizEtudiant2PageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'quizz3',
    loadChildren: () => import('./quizz3/quizz3.module').then( m => m.Quizz3PageModule)
  },
  {
    path: 'quiz4',
    loadChildren: () => import('./quiz4/quiz4.module').then( m => m.Quiz4PageModule)
  },  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
