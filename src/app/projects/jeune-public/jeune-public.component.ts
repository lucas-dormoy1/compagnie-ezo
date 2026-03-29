import { Component } from '@angular/core';
import { SupportersComponent } from '../../shared/supporters/supporters.component';

@Component({
    selector: 'app-jeune-public',
    templateUrl: './jeune-public.component.html',
    styleUrls: ['./jeune-public.component.scss'],
    standalone: true,
    imports: [SupportersComponent],
})
export class JeunePublicComponent {
}
