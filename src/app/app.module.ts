import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { EntryComponent } from './components/entry/entry.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationElementComponent } from './components/navigation/navigation-element/navigation-element.component';
import { SideProfileComponent } from './components/side-profile/side-profile.component';
import { EntriesComponent } from './components/entries/entries.component';
import { NewEntryComponent } from './components/new-entry/new-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    EntryComponent,
    MainComponent,
    NavigationComponent,
    NavigationElementComponent,
    SideProfileComponent,
    EntriesComponent,
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
