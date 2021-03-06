import { Component, OnInit } from '@angular/core';

import { ActiveFilterService, Filter } from '../../services/navigation/activeFilter.service';
import { Language } from '../../services/resources/language.resource';
import { ResourceModel } from 'ngx-resource-factory/resource/resource-model';
import { AvailableLanguagesService } from '../../services/navigation/availableLanguages.service';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  activeFilter: Filter;

  languages: ResourceModel<Language>[] = [];

  constructor(private availableLanguagesService: AvailableLanguagesService,
              private activeFilterService: ActiveFilterService) {
  }

  ngOnInit() {
    this.activeFilterService.filterUpdated.subscribe((filter) => {
      this.activeFilter = filter;
    });

    this.availableLanguagesService.languagesPromise
      .then((data) => {
        this.languages = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateActiveFilter(value: number) {
    this.activeFilterService.updateFilter('languages', value);
  }

}
