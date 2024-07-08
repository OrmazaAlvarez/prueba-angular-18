import { ComponentType } from '@angular/cdk/portal';
import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class ModalService {
    constructor() { }

    private readonly dialog = inject(MatDialog);

    openModal<CT, T>(componentRef: ComponentType<CT>, data?: T, isNew: boolean = true): void {
        let configData = { data, isNew };
        this.dialog.open(componentRef, {
            width: '500px',
            data: configData,

        });
    }

    closeModal() {
        this.dialog.closeAll();
    }

}