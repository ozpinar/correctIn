import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ChatScreenComponent } from './components/messages/chat-screen/chat-screen.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'messages/:username', component: ChatScreenComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
