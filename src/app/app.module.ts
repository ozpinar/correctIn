import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { CorrectedEntryComponent } from './components/corrected-entry/corrected-entry.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationElementComponent } from './components/navigation/navigation-element/navigation-element.component';
import { SideProfileComponent } from './components/side-profile/side-profile.component';
import { EntriesComponent } from './components/entries/entries.component';
import { NewEntryComponent } from './components/new-entry/new-entry.component';
import { SwitchComponent } from './components/navigation/switch/switch.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChatElementComponent } from './components/messages/chat-element/chat-element.component';
import { ChatsComponent } from './components/messages/chats/chats.component';
import { MessageComponent } from './components/messages/message/message.component';
import { ChatScreenComponent } from './components/messages/chat-screen/chat-screen.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EntryComponent } from './components/entry/entry.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { switchReducer } from './store/reducers/switch.reducer';
import { SearchComponent } from './components/top-menu/search/search.component';
import { NotificationsComponent } from './components/top-menu/notifications/notifications.component';
import { ProfileEntriesComponent } from './components/entries/profile-entries/profile-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    CorrectedEntryComponent,
    MainComponent,
    NavigationComponent,
    NavigationElementComponent,
    SideProfileComponent,
    EntriesComponent,
    NewEntryComponent,
    SwitchComponent,
    MessagesComponent,
    ProfileComponent,
    SettingsComponent,
    ChatElementComponent,
    ChatsComponent,
    MessageComponent,
    ChatScreenComponent,
    LoginComponent,
    RegisterComponent,
    EntryComponent,
    SearchComponent,
    NotificationsComponent,
    ProfileEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ switch: switchReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
