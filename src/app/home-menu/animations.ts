import {
  animate,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger
} from "@angular/animations";

export const SlideAnimation = trigger("slideView", [
  transition("void => *", []),
  transition("main => creations, main => projects", [
    style({ transform: "translateX(30px)", opacity: 0 }),
    animate("150ms ease-out", style({ transform: "translateX(0)", opacity: 1 }))
  ]),
  transition("creations => main, projects => main", [
    style({ transform: "translateX(-30px)", opacity: 0 }),
    animate("150ms ease-out", style({ transform: "translateX(0)", opacity: 1 }))
  ]),
]);

export const DropDownAnimation = trigger("dropDownMenu", [
  transition(":enter", [
    style({ height: 0, overflow: "hidden" }),
    query(".menu-item", [
      style({ opacity: 0, transform: "translateY(-50px)" })
    ]),
    sequence([
      animate("200ms", style({ height: "*" })),
      query(".menu-item", [
        stagger(-50, [
          animate("200ms ease", style({ opacity: 1, transform: "none" }))
        ])
      ])
    ])
  ]),

  transition(":leave", [
    style({ height: "*", overflow: "hidden" }),
    query(".menu-item", [style({ opacity: 1, transform: "none" })]),
    sequence([
      query(".menu-item", [
        stagger(50, [
          animate(
            "200ms ease",
            style({ opacity: 0, transform: "translateY(-50px)" })
          )
        ])
      ]),
      animate("200ms", style({ height: 0 }))
    ])
  ])
]);
