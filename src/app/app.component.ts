import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './modal/modal.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'prueba_angular_18';
  private readonly dialogService = inject(ModalService);

  constructor() { }

  opoModeal() {
    this.dialogService.openModal<ModalComponent, any>(ModalComponent);
  }
}
