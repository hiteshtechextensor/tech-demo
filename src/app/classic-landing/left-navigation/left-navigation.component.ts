import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { LftNavService } from './services/lft-nav.service';

@Component({
  selector: 'app-left-navigation',
  standalone: false,
  templateUrl: './left-navigation.component.html',
  styleUrl: './left-navigation.component.scss',
})
export class LeftNavigationComponent implements OnInit {
  tabMenu = [];
  leftMenuData: any;
  loadMenu: boolean = false;
  fields: any;

  constructor(private lftNavService: LftNavService) {}

  ngOnInit(): void {
    this.getLeftMenuData();
  }

  /**
   * Getting Left Menu Data from api
   */
  getLeftMenuData() {
    this.lftNavService.getLeftNavData().subscribe((response: any) => {
      this.leftMenuData = response.Result;
      let parentMenus = this.leftMenuData
        .filter((menu) => !menu.ParentID)
        .sort((a, b) => a.Sequence - b.Sequence);
      parentMenus.forEach((parentObj: any, index) => {
        const childrens = this.leftMenuData.filter(
          (menu) => menu.ParentID === parentObj.ID
        );
        const parentObject = {
          id: parentObj.ScreenID,
          nodeId: index.toString(),
          nodeText: parentObj.DisplayName,
          iconCss: 'ph-fill ph-grid-four',
          link: `/screen/${parentObj.ScreenID}`,
          nodeChild: this.prePareChildrens(this.leftMenuData, childrens, index),
        };
        this.tabMenu.push(parentObject);
      });
      this.loadMenu = true;
      this.fields = {
        dataSource: this.tabMenu,
        id: 'nodeId',
        text: 'nodeText',
        child: 'nodeChild',
        iconCss: 'iconCss',
      };
    });
  }

  /**
   * Preparing Childrens and return to parent menu
   */
  prePareChildrens(allMenus: any[], childrens: any[], parentIndex) {
    const childrenMenus = [];
    childrens.forEach((child: any, index) => {
      const menuIcon = child.Icon;
      const subChildrens = allMenus.filter(
        (menu) => menu.ParentID === child.ID
      );
      const children = {
        id: child.ScreenID,
        nodeId: parentIndex.toString().concat('-', index.toString()),
        nodeText: child.DisplayName,
        iconCss: 'ph-fill ph-grid-four',
        link: `/screen/${child.ScreenID}`,
        nodeChild: this.prePareChildrens(allMenus, subChildrens, index),
      };
      childrenMenus.push(children);
    });
    return childrenMenus;
  }
}
