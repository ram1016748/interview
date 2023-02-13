import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { InstallationComponent } from './installation/installation.component';
import { FirstProgramComponent } from './first-program/first-program.component';
import { ComponentsComponent } from './components/components.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { UsingServiceComponent } from './using-service/using-service.component';
import { HttpObservablesComponent } from './http-observables/http-observables.component';

import { FetchingDataUsingHttpComponent } from './fetching-data-using-http/fetching-data-using-http.component';
import { HttpErrorHandlingComponent }  from './http-error-handling/http-error-handling.component';
import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';
import { WildcardRoutesAndReDirectionComponent } from './wildcard-routes-and-re-direction/wildcard-routes-and-re-direction.component';
import { RouteParametersComponent } from './route-parameters/route-parameters.component';
import { ParammapObservablesComponent } from './parammap-observables/parammap-observables.component';
import { OptionalRouteParametersComponent } from './optional-route-parameters/optional-route-parameters.component';
import { RelatveNavigationComponent } from './relatve-navigation/relatve-navigation.component';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { RouteGuardsComponent } from './route-guards/route-guards.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { SettingUpNewProjectComponent } from './setting-up-new-project/setting-up-new-project.component';
import { AddingFormHtmlComponent } from './adding-form-html/adding-form-html.component';
import { BindingDataWithNgformComponent } from './binding-data-with-ngform/binding-data-with-ngform.component';
import { BindingDataWithModelComponent } from './binding-data-with-model/binding-data-with-model.component';
import { TrackingStateValidityComponent } from './tracking-state-validity/tracking-state-validity.component';
import { ValidationWithVisualFeedbackComponent } from './validation-with-visual-feedback/validation-with-visual-feedback.component';
import { DisplayingErrorMessageComponent } from './displaying-error-message/displaying-error-message.component';
import { SelectControlValidationComponent } from './select-control-validation/select-control-validation.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { SubmittingFormDataComponent } from './submitting-form-data/submitting-form-data.component';
import { ExpressServiceReceiveFormDataComponent } from './express-service-receive-form-data/express-service-receive-form-data.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { TdfVsReactiveFormsComponent } from './tdf-vs-reactive-forms/tdf-vs-reactive-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AddingFormsHtmlComponent } from './adding-forms-html/adding-forms-html.component';
import { CreatingFormModalComponent } from './creating-form-modal/creating-form-modal.component';
import { NestingFormGroupComponent } from './nesting-form-group/nesting-form-group.component';
import { ManagingControlValuesComponent } from './managing-control-values/managing-control-values.component';
import { FormbuilderServiceComponent } from './formbuilder-service/formbuilder-service.component';
import { SimpleValidationComponent } from './simple-validation/simple-validation.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { ConditionalValidationComponent } from './conditional-validation/conditional-validation.component';
import { DynamicFormControlsComponent } from './dynamic-form-controls/dynamic-form-controls.component';
import { AngularMaterialBootstrap5Component } from './angular-material-bootstrap5/angular-material-bootstrap5.component';
import { IntroductionToNosqlDatabaseComponent } from './introduction-to-nosql-database/introduction-to-nosql-database.component';
import { MongodbComponent } from './mongodb/mongodb.component';



const ROUTES: Routes = [
  {path: '', redirectTo: '/introduction', pathMatch: 'full'},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'installation', component: InstallationComponent},
  {path: 'first-program', component: FirstProgramComponent},
  {path: 'components', component: ComponentsComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'property-binding', component: PropertyBindingComponent},
  {path: 'class-binding', component: ClassBindingComponent},
  {path: 'style-binding', component: StyleBindingComponent},
  {path: 'event-binding', component: EventBindingComponent},
  {path: 'template-reference', component: TemplateReferenceComponent},
  {path: 'two-way-data', component: TwoWayDataComponent},
  {path: 'ng-if-directive', component: NgIfDirectiveComponent},
  {path: 'ng-switch-directive', component: NgSwitchDirectiveComponent},
  {path: 'ng-for-directive', component: NgForDirectiveComponent},
  {path: 'component-interaction', component: ComponentInteractionComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'dependency-injection', component: DependencyInjectionComponent},
  {path: 'using-service', component: UsingServiceComponent},
  {path: 'http-observables', component: HttpObservablesComponent},
  {path: 'fetching-data-using-http', component: FetchingDataUsingHttpComponent},
  {path: 'http-error-handling', component: HttpErrorHandlingComponent},
  {path: 'routing-navigation', component: RoutingNavigationComponent},
  {path: 'wildcard-routes-and-re-direction', component: WildcardRoutesAndReDirectionComponent},
  {path: 'parammap-observables', component: ParammapObservablesComponent},
  {path: 'property-binding', component: PropertyBindingComponent},
  {path: 'route-parameters', component: RouteParametersComponent},
  {path: 'optional-route-parameters', component: OptionalRouteParametersComponent},
  {path: 'optional-route-parameters', component: OptionalRouteParametersComponent},
  {path: 'relatve-navigation', component: RelatveNavigationComponent},
  {path: 'child-routes', component: ChildRoutesComponent},
  {path: 'lazy-loading', component: LazyLoadingComponent},
  {path: 'route-guards', component: RouteGuardsComponent},
  {path: 'angular-forms', component: AngularFormsComponent},
  {path: 'template-driven-forms', component: TemplateDrivenFormsComponent},
  {path: 'setting-up-new-project', component: SettingUpNewProjectComponent},
  {path: 'adding-forms-html', component: AddingFormHtmlComponent},
  {path: 'binding-data-with-ngform', component: BindingDataWithNgformComponent},
  {path: 'binding-data-with-model', component: BindingDataWithModelComponent},
  {path: 'tracking-state-validity', component: TrackingStateValidityComponent},
  {path: 'validation-with-visual-feedback', component: ValidationWithVisualFeedbackComponent},
  {path: 'displaying-error-message', component: DisplayingErrorMessageComponent},
  {path: 'select-control-validation', component: SelectControlValidationComponent},
  {path: 'form-validation', component: FormValidationComponent},
  {path: 'submitting-form-data', component: SubmittingFormDataComponent},
  {path: 'express-service-receive-form-data', component: ExpressServiceReceiveFormDataComponent},
  {path: 'error-handling', component: ErrorHandlingComponent},
  {path: 'tdf-vs-reactive-forms', component: TdfVsReactiveFormsComponent},
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'adding-forms-html', component: AddingFormsHtmlComponent},
  {path: 'creating-form-modal', component: CreatingFormModalComponent},
  {path: 'nesting-form-group', component: NestingFormGroupComponent},
  {path: 'managing-control-values', component: ManagingControlValuesComponent},
  {path: 'formbuilder-service', component: FormbuilderServiceComponent},
  {path: 'simple-validation', component: SimpleValidationComponent},
  {path: 'custom-validation', component: CustomValidationComponent},
  {path: 'dynamic-form-control', component: DynamicFormControlComponent},
  {path: 'conditional-validation', component: ConditionalValidationComponent},
  {path: 'dynamic-form-controls', component: DynamicFormControlsComponent},
  {path: 'angular-material-bootstrap5', component: AngularMaterialBootstrap5Component},
  {path: 'introduction-to-nosql-database', component: IntroductionToNosqlDatabaseComponent},
  {path: 'mongodb', component: MongodbComponent}
];


export const ROUTING: ModuleWithProviders<any> = RouterModule.forRoot(ROUTES);

export const myRoutings = [
                  IntroductionComponent,
                  InstallationComponent,
                  FirstProgramComponent,
                  ComponentsComponent,
                  InterpolationComponent,
                  PropertyBindingComponent,
                  ClassBindingComponent,
                  StyleBindingComponent,
                  EventBindingComponent,
                  TemplateReferenceComponent,
                  TwoWayDataComponent,
                  NgIfDirectiveComponent,
                  NgSwitchDirectiveComponent,
                  NgForDirectiveComponent,
                  ComponentInteractionComponent,
                  PipesComponent,
                  ServicesComponent,
                  DependencyInjectionComponent,
                  UsingServiceComponent,
                  HttpObservablesComponent,
                  FetchingDataUsingHttpComponent,
                  HttpErrorHandlingComponent,
                  RoutingNavigationComponent,
                  WildcardRoutesAndReDirectionComponent,
                  ParammapObservablesComponent,
                  PropertyBindingComponent,
                  RelatveNavigationComponent,
                  OptionalRouteParametersComponent,
                  RouteParametersComponent,
                  ChildRoutesComponent,
                  LazyLoadingComponent,
                  RouteGuardsComponent,
                  AngularFormsComponent,
                  TemplateDrivenFormsComponent,
                  SettingUpNewProjectComponent,
                  AddingFormHtmlComponent,
                  BindingDataWithNgformComponent,
                  BindingDataWithModelComponent,
                  TrackingStateValidityComponent,
                  ValidationWithVisualFeedbackComponent,
                  DisplayingErrorMessageComponent,
                  SelectControlValidationComponent,
                  FormValidationComponent,
                  SubmittingFormDataComponent,
                  ExpressServiceReceiveFormDataComponent,
                  ErrorHandlingComponent,
                  TdfVsReactiveFormsComponent,
                  ReactiveFormsComponent,
                  AddingFormsHtmlComponent,
                  CreatingFormModalComponent,
                  NestingFormGroupComponent,
                  ManagingControlValuesComponent,
                  FormbuilderServiceComponent,
                  SimpleValidationComponent,
                  CustomValidationComponent,
                  DynamicFormControlComponent,
                  ConditionalValidationComponent,
                  DynamicFormControlsComponent,
                  AngularMaterialBootstrap5Component,
                  IntroductionToNosqlDatabaseComponent,
                  MongodbComponent

    ];