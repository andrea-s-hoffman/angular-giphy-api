import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFavsComponent } from './search-favs.component';

describe('SearchFavsComponent', () => {
  let component: SearchFavsComponent;
  let fixture: ComponentFixture<SearchFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFavsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
