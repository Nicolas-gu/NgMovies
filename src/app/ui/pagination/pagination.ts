import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  imports: [MatPaginatorModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination {

}
