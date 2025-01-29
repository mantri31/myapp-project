import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyappProjectComponent } from './myapp-project/myapp-project.component';
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
import { CreateUserComponent } from './create-user/create-user.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { HooksComponent } from './hooks/hooks.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'myapp-project',canActivate:[AuthenticationGuard], component:MyappProjectComponent,children:[
    {path:'home',canActivate:[AuthenticationGuard], component:HomeComponent},
    {path:'welcome',canActivate:[AuthenticationGuard], component:WelcomeComponent},
    {path:'data-binding',canActivate:[AuthenticationGuard], component:DataBindingComponent},
    {path:'calculator',canActivate:[AuthenticationGuard], component:CalculatorComponent}, 
    {path:'rectangle',canActivate:[AuthenticationGuard], component:RectangleComponent},
    {path:'circle',canActivate:[AuthenticationGuard], component:CircleComponent},
    {path:'bmi',canActivate:[AuthenticationGuard], component:BmiComponent},
    {path:'directives',canActivate:[AuthenticationGuard], component:DirectivesComponent},
    {path:'employee',canActivate:[AuthenticationGuard], component:EmployeeComponent},
    {path:'flipkart',canActivate:[AuthenticationGuard], component:FlipkartComponent},
    {path:'vehicle',canActivate:[AuthenticationGuard], component:VehicleComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'mail',component:MailComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'blog',component:BlogComponent},
    {path:'imdb',component:ImdbComponent},
    {path:'profile',component:ProfileComponent},
    {path:'pokemon',component:PokemonComponent},
    {path:'accounts',canActivate:[AuthenticationGuard], component:AccountsComponent},
    {path:'create-vehicle',canActivate:[AuthenticationGuard], component:CreateVehicleComponent},
    {path:'students',canActivate:[AuthenticationGuard], component:StudentsComponent},
    {path:'create-user',canActivate:[AuthenticationGuard], component:CreateUserComponent},
    {path:'task',component:TaskComponent},
    {path:'vehicle-details/:id',canActivate:[AuthenticationGuard], component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',canActivate:[AuthenticationGuard], component:CreateVehicleComponent},
    {path:'hooks',canActivate:[AuthenticationGuard], component:HooksComponent},
    {path:'sibling1', component:Sibling1Component},
    {path:'sibling2', component:Sibling2Component},
    {path:'parent', component:ParentComponent},
    {path:'child', component:ChildComponent},
    {path:'rating', component:RatingComponent},
    {path: 'payments',loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)}
    
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
