import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


import { DataService } from '.././data.service';
import { PagerService } from '.././pager.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {


  public employeeData;

  // pager object
  pager: any = {};
  // paged items
  pagedItem: any[];

  public searchString: string;
  modalRef: BsModalRef;

  constructor(private dataService: DataService, private pagerService: PagerService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
    this.recieveData();
  }


  recieveData() {
    this.dataService.getData().subscribe(data => {
      this.employeeData = data;
      //   console.log(this.employeeData);
      this.setPage(1)//initialize to page 1
    })
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.employeeData.length, page);

    // get current page of items
    this.pagedItem = this.employeeData.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }
  viewProfile(x) {
    alert(x);
  }

}
