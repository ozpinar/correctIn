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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { switchReducer } from './store/reducers/switch.reducer';
import { SearchComponent } from './components/top-menu/search/search.component';
import { NotificationsComponent } from './components/top-menu/notifications/notifications.component';
import { ProfileEntriesComponent } from './components/entries/profile-entries/profile-entries.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NgPipesModule } from 'ngx-pipes';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoadingComponent } from './components/loading/loading.component';


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
    ProfileEntriesComponent,
    UserProfileComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ switch: switchReducer }),
    NgPipesModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
