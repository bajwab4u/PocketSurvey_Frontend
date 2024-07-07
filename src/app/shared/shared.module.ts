import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from './core/loaderService';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
  imports: [CommonModule],
  providers: [LoaderService],
})
export class RootSharedModule {}
