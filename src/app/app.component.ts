import { IUploadedFile } from './models/i.uploadfile.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-upload-app';
  uploadedFiles: Array<IUploadedFile> = []

  handleUploadedFiles(file: IUploadedFile): void {
    this.uploadedFiles.push(file);
  }
}
