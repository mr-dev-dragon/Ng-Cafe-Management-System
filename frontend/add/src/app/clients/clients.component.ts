import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router , RouterLink} from '@angular/router';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientslist = [
    {
      clientId: 1,
      clientName: 'John Doe',
      clientAddress: '123 Main St',
      clientCity: 'jkjk',
      clientState: 'RT',
      clientZip: '345',
      clientPhone: '123-456-7890',
      clientEmail: 'ahouaj@gmail.com',
    },
    {
      clientId: 2,
      clientName: 'ala',
      clientAddress: 'hoaima',
      clientCity: 'cv',
      clientState: 'SD',
      clientZip: '23455',
      clientPhone: '123-4563245',
      clientEmail: '  kasdf@gmail.com',
    },
    {
      clientId: 2,
      clientName: 'alalk',
      clientAddress: 'chaewan',
      clientCity: 'asdf',
      clientState: 'CV',
      clientZip: '679',
      clientPhone: '123-4345234',
      clientEmail: '  kfasd@gmail.com',
    },
    {
      clientId: 2,
      clientName: 'aftlimnm',
      clientAddress: 'taner',
      clientCity: 'ta ',
      clientState: 'DS',
      clientZip: '3456',
      clientPhone: '123-434452',
      clientEmail: '  k@gmail.com',
    },
    {
      clientId: 2,
      clientName: 'puimar',
      clientAddress: 'twanat',
      clientCity: 'e',
      clientState: 'DS',
      clientZip: '2345',
      clientPhone: '123-432345',
      clientEmail: '  kzxcv@gmail.com',
    },
    {
      clientId: 2,
      clientName: 'lg',
      clientAddress: 'ther',
      clientCity: 'df',
      clientState: 'D;L',
      clientZip: '0897',
      clientPhone: '123-43223452',
      clientEmail: '  kzxcvzxcvz@gmail.com',
    },
    {
      clientId: 2,
      clientName: 'brahim',
      clientAddress: 'tanger ',
      clientCity: 'ghj',
      clientState: 'IO',
      clientZip: '0589',
      clientPhone: '123-4322343452',
      clientEmail: '  k;lkjasdfk@gmail.com',
    },
    {
      clientId: 2,
      clientName: 'ousam',
      clientAddress: 'titwn',
      clientCity: 'jk',
      clientState: 'GH',
      clientZip: '05857894',
      clientPhone: '123-45634523',
      clientEmail: '  kdsfasd@gmail.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
