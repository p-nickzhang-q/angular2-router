import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;

  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    // ActivatedRoute.snapshot 参数快照 路由跳转到同一组件下，参数不会更新
    // this.productId = this.routeInfo.snapshot.queryParams['id'];
    // this.productId = this.routeInfo.snapshot.params['id'];
    //订阅
    this.routeInfo.params.subscribe((params: Params) => {
      this.productId = params['id'];
    })
  }

}
