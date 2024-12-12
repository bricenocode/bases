import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    //Debemos de exportar el componente para que sea utilizado en otro modulo
    CounterComponent
  ]
})


export class CounterModule{}
