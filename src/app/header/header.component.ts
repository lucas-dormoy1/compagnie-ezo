import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { distinctUntilChanged, filter, fromEvent, map, pairwise, share, Subject, takeUntil, throttleTime } from 'rxjs';
import { HomeMenuComponent } from '../home-menu/home-menu.component';

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [NgClass, NgOptimizedImage, RouterLink, HomeMenuComponent],
})

export class HeaderComponent implements AfterViewInit, OnDestroy {
  public isVisible = true;
  private destroy$ = new Subject<void>();

  ngAfterViewInit(): void {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.scrollY),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    goingUp$.pipe(takeUntil(this.destroy$)).subscribe(() => (this.isVisible = true));
    goingDown$.pipe(takeUntil(this.destroy$)).subscribe(() => (this.isVisible = false));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
