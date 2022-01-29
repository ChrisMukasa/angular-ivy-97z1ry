import * as XLSX  from 'xlsx';
import * as FileSaver from 'file-saver';
import { Injectable } from '@angular/core';
import * as saveAs from 'file-saver';

@Injectable({ providedIn: 'root' })
export class ExcelService {

  constructor() { }

  public fromTable(data: any[], title: string, sheetName = 'Data'): void {
    const work_sheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data)
    const work_book : XLSX.WorkBook  = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(work_book, work_sheet, title)

    XLSX.writeFile(work_book, title + '_' + new Date().getTime() +'_export'+ '.xlsx')
  }

  public toEXCEL(data: any[], title: string ) {
    const work_sheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data)
    const work_book : XLSX.WorkBook  = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(work_book, work_sheet, title)

    XLSX.writeFile(work_book, title + '_' + new Date().getTime() +'_export'+ '.xlsx')
  }

  public toCSV(data: any[], title:string) {
    const replacer = (key:string, value:any) => value === null ? '' : value;
    const header = Object.keys(data[0]);
    let csv = data.map((row: { [x: string]: any; }) => header.map(fieldName => JSON.stringify(row[fieldName],replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');
    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, title + '_' + new Date().getTime() +'_export'+ '.csv');
  }

  public toJSON(data: any[], title:string) {
    const c = JSON.stringify(data);
    const file = new Blob([c], {type: 'text/json'});
    this.download(file,title + '_' + new Date().getTime() +'_export'+ '.json');
  }

  download(blob:Blob, filename: string) {
    var a = document.createElement("a"), url = URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    setTimeout(function() {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}
