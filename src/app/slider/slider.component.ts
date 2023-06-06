import { Component, OnInit, AfterViewInit  } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { SlideServiceService } from '../service/slide/slideService.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit,AfterViewInit {

  private swiper!: Swiper;
  slides: any[]=[];

  constructor(private _slide:SlideServiceService) { }

  ngOnInit(): void {
    this._slide.getSlides().subscribe((res) =>{
      this.slides = res;

      console.log('sss',this.slides);
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initSwiper();
    }, 1000);
  }

  initSwiper() {
    const swiperConfig: SwiperOptions = {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      }
    };
    this.swiper = new Swiper('.swiper-container', swiperConfig);
    this.swiper.autoplay.start(); // Khởi động autoplay
  }

  startAutoplay() {
    if (this.swiper) {
      this.swiper.autoplay.start();
    }
  }

  stopAutoplay() {
    if (this.swiper) {
      this.swiper.autoplay.stop();
    }
  }


}
