import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dragDrop';

  toDoList:any = [
    "Get up early in morning at 7 O'Clock",
    "Brush your teeth",
    "Having Breakfast",
    "Dressed up",
    "Go to work",
    "Having lunch",
    "Return from work",
    "Having Dinner",
    "Go to Bed"
  ]
  done:any = [
    
  ]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
