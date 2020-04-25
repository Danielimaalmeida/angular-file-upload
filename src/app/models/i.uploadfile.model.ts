export interface IUploadedFile {
  file?: File;
  error?: IUploadError;
}

export interface IUploadError {
  name: string;
  errorMessage: string;
}
