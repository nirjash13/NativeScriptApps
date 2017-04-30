"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        var obj = {
            type: "Notebook",
            purpose: "Sell"
        };
        console.log("Hello World");
        console.dump(obj);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar title=\"My Apple\" class=\"action-bar\"></ActionBar>\n    <Image src=\"~/images/notebook.jpg\"></Image>\n  ",
        styles: ["\n    @keyframes spin {\n      from { transform: rotate(0); } to { transform: rotate(360); }\n    }\n    Image {\n      animation-name: spin; animation-duration: 3s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQW9CMUMsSUFBYSxZQUFZO0lBQ3ZCO1FBQ0UsSUFBSSxHQUFHLEdBQUc7WUFDUixJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFBO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksWUFBWTtJQWpCeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSw4SEFHVDtRQUNELE1BQU0sRUFBRSxDQUFDLHdRQVNSLENBQUM7S0FDSCxDQUFDOztHQUNXLFlBQVksQ0FTeEI7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBsZVwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9ub3RlYm9vay5qcGdcIj48L0ltYWdlPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfSB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MCk7IH1cbiAgICB9XG4gICAgSW1hZ2Uge1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW47IGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIHR5cGU6IFwiTm90ZWJvb2tcIixcbiAgICAgIHB1cnBvc2U6IFwiU2VsbFwiXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGRcIik7XG4gICAgY29uc29sZS5kdW1wKG9iaik7XG4gIH1cbn0iXX0=