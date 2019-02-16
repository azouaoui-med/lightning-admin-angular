import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(public toastr: ToastrService) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('This is a success toastr message!', 'Success');
  }
  showInfo() {
    this.toastr.info('This is an info toastr message!', 'Info');
  }
  showWarning() {
    this.toastr.warning('This is a warning toastr message!', 'Warning');
  }
  showError() {
    this.toastr.error('This is an error toastr message!', 'Error');
  }
  showToastr(positionClass) {
    this.toastr.info('Hello world!', 'Toastr fun!', {
      positionClass
    });
  }

}
