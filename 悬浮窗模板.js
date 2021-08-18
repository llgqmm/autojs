
"ui";
var resource = context.getResources();
ui.layout(
  <vertical padding="0 80">
    <com.stardust.autojs.core.console.ConsoleView
      id="console"
      background="#7f000000"
      h="80" w="300"/>
<button id="stop1" bg="#ed1941" text="停止" h="32" w="65" textSize="10sp"/>
  </vertical>
);

ui.console.setConsole(runtime.console);

let c = new android.util.SparseArray();
let Log = android.util.Log;
c.put(Log.VERBOSE, new java.lang.Integer(colors.parseColor("#dfc0c0c0")));
c.put(Log.DEBUG, new java.lang.Integer(colors.parseColor("#cc000000")));
c.put(Log.INFO, new java.lang.Integer(colors.parseColor("#ff64dd17")));
c.put(Log.WARN, new java.lang.Integer(colors.parseColor("#ff2962ff")));
c.put(Log.ERROR, new java.lang.Integer(colors.parseColor("#ffd50000")));
c.put(Log.ASSERT, new java.lang.Integer(colors.parseColor("#ffff534e")));
ui.console.setColors(c);

//隐藏日志输入框和按钮
input_container = activity.findViewById(getResourceID("input_container", "id"));
input_container.attr("visibility", "gone");

function getResourceID(name, defType) {
  return resource.getIdentifier(name, defType, context.getPackageName());
};

ui.stop1.click(()=>{
  console.log(1);
  console.info("时间:"+"11111");
  });