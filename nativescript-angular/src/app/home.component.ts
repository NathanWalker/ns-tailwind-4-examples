import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { TextField } from "@nativescript/core";

@Component({
  selector: "ns-home",
  templateUrl: "./home.component.html",
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeComponent {
  onLoaded(args) {
    global.inspectElement = args.object;
    // if (__APPLE__) {
    //   const uiTextField = (args.object as TextField).ios as UITextField;

    //   let paragraphStyle = NSMutableParagraphStyle.new();
    //   paragraphStyle.lineBreakMode = NSLineBreakMode.ByTruncatingTail;

    //   // Create an attributed string and apply the paragraph style
    //   let attributedString = NSMutableAttributedString.alloc().initWithString(
    //     uiTextField.text
    //   );
    //   attributedString.addAttributeValueRange(
    //     NSParagraphStyleAttributeName,
    //     paragraphStyle,
    //     NSRangeFromString(`{0,${attributedString.length}}`)
    //   );

    //   // Set the text field's attributed text as the attributed string
    //   uiTextField.attributedText = attributedString;
    // }
  }
}
