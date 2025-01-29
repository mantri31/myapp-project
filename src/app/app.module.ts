import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappProjectComponent } from './myapp-project/myapp-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { ProfileComponent } from './profile/profile.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentsComponent } from './students/students.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { HooksComponent } from './hooks/hooks.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CapitalDirective } from './capital.directive';
import { BalancePipe } from './balance.pipe';
import { TokenInterceptor } from './token.interceptor';
@NgModule({
  declarations: [		
    AppComponent,
    MyappProjectComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectivesComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent,
    AmazonComponent,
    MailComponent,
    PinterestComponent,
    BlogComponent,
    ImdbComponent,
    ProfileComponent,
    PokemonComponent,
    AccountsComponent,
    CreateVehicleComponent,
    StudentsComponent,
    CreateUserComponent,
    TaskComponent,
      LoginComponent,
      VehicleDetailsComponent,
      HooksComponent,
      Sibling1Component,
      Sibling2Component,
      ParentComponent,
      ChildComponent,
      RatingComponent,
      CapitalDirective,
      BalancePipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
