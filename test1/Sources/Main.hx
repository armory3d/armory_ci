// Auto-generated
package ;
class Main {
    public static inline var projectName = 'untitled';
    public static inline var projectPackage = 'arm';
    public static inline var projectPath = '/Users/lubos/Documents/Armory/armory_ci/test1';
    public static inline var projectAssets = 8;
    public static var projectWindowMode = kha.WindowMode.Window;
    public static inline var projectWindowResize = false;
    public static inline var projectWindowMaximize = false;
    public static inline var projectWindowMinimize = true;
    public static var projectWidth = 960;
    public static var projectHeight = 540;
    static inline var projectSamplesPerPixel = 1;
    static inline var projectVSync = true;
    static inline var projectScene = 'Scene';
    static var state:Int;
    #if js
    static function loadLib(name:String) {
        kha.LoaderImpl.loadBlobFromDescription({ files: [name] }, function(b:kha.Blob) {
            untyped __js__("(1, eval)({0})", b.toString());
            state--;
            start();
        });
    }
    static function loadLibAmmo(name:String) {
        kha.LoaderImpl.loadBlobFromDescription({ files: [name] }, function(b:kha.Blob) {
            var print = function(s:String) { trace(s); };
            var loaded = function() { state--; start(); }
            untyped __js__("(1, eval)({0})", b.toString());
            untyped __js__("Ammo({print:print}).then(loaded)");
        });
    }
    #end
    public static function main() {
        iron.object.BoneAnimation.skinMaxBones = 8;

        iron.object.LampObject.cascadeCount = 4;
        iron.object.LampObject.cascadeSplitFactor = 0.800000011920929;

        state = 1;
        #if (js && arm_bullet) state++; loadLibAmmo("ammo.js"); #end
        #if (js && arm_navigation) state++; loadLib("recast.js"); #end
        state--; start();
    }
    static function start() {
        if (state > 0) return;
        armory.object.Uniforms.register();
        if (projectWindowMode == kha.WindowMode.Fullscreen) { projectWindowMode = kha.WindowMode.BorderlessWindow; projectWidth = kha.Display.width(0); projectHeight = kha.Display.height(0); }
        kha.System.init({title: projectName, width: projectWidth, height: projectHeight, samplesPerPixel: projectSamplesPerPixel, vSync: projectVSync, windowMode: projectWindowMode, resizable: projectWindowResize, maximizable: projectWindowMaximize, minimizable: projectWindowMinimize}, function() {
            iron.App.init(function() {

                iron.Scene.setActive(projectScene, function(object:iron.object.Object) {

                    object.addTrait(new armory.trait.internal.SpaceArmory());

                    iron.RenderPath.setActive(armory.renderpath.RenderPathCreator.get());

                });
            });
        });
    }
}
