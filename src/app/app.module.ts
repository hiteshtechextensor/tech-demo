import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { FormioModule } from '@formio/angular';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ClassicLandingComponent } from './classic-landing/classic-landing.component';
import { TopHeaderComponent } from './classic-landing/top-header/top-header.component';
import { LeftNavigationComponent } from './classic-landing/left-navigation/left-navigation.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { HttpClientModule } from '@angular/common/http';
import { API_URL, Workflow_URL } from '@techextensor/tab-core-utility';
import { UsersComponent } from './users/users.component';
import { RoleComponent } from './role/role.component';
import { FormDesignerComponent } from './classic-landing/form-designer/form-designer.component';
import { NotificationComponent } from './classic-landing/top-header/notification/notification.component';
import { LoaderComponent } from './loader/loader.component';
import { UserDropDownComponent } from './classic-landing/top-header/user-drop-down/user-drop-down.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { SettingPanelComponent } from './setting-panel/setting-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent,
    LoginComponent,
    SignUpComponent,
    ClassicLandingComponent,
    ForgotPasswordComponent,
    TopHeaderComponent,
    LeftNavigationComponent,
    UsersComponent,
    RoleComponent,
    FormDesignerComponent,
    NotificationComponent,
    LoaderComponent,
    UserDropDownComponent,
    AlertMessageComponent,
    SettingPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule,
    PagerModule,
    FormioModule,
    TreeViewModule,
  ],
  providers: [
    {
      provide: API_URL,
      useValue: 'http://27.109.17.250:8446/api/v1/',
    },
    {
      provide: Workflow_URL,
      useValue: '',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
