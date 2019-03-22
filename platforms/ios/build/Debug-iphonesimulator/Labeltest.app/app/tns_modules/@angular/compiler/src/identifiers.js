/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/identifiers", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CORE = '@angular/core';
    var Identifiers = /** @class */ (function () {
        function Identifiers() {
        }
        Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS = {
            name: 'ANALYZE_FOR_ENTRY_COMPONENTS',
            moduleName: CORE,
        };
        Identifiers.ElementRef = { name: 'ElementRef', moduleName: CORE };
        Identifiers.NgModuleRef = { name: 'NgModuleRef', moduleName: CORE };
        Identifiers.ViewContainerRef = { name: 'ViewContainerRef', moduleName: CORE };
        Identifiers.ChangeDetectorRef = {
            name: 'ChangeDetectorRef',
            moduleName: CORE,
        };
        Identifiers.QueryList = { name: 'QueryList', moduleName: CORE };
        Identifiers.TemplateRef = { name: 'TemplateRef', moduleName: CORE };
        Identifiers.Renderer2 = { name: 'Renderer2', moduleName: CORE };
        Identifiers.CodegenComponentFactoryResolver = {
            name: 'ɵCodegenComponentFactoryResolver',
            moduleName: CORE,
        };
        Identifiers.ComponentFactoryResolver = {
            name: 'ComponentFactoryResolver',
            moduleName: CORE,
        };
        Identifiers.ComponentFactory = { name: 'ComponentFactory', moduleName: CORE };
        Identifiers.ComponentRef = { name: 'ComponentRef', moduleName: CORE };
        Identifiers.NgModuleFactory = { name: 'NgModuleFactory', moduleName: CORE };
        Identifiers.createModuleFactory = {
            name: 'ɵcmf',
            moduleName: CORE,
        };
        Identifiers.moduleDef = {
            name: 'ɵmod',
            moduleName: CORE,
        };
        Identifiers.moduleProviderDef = {
            name: 'ɵmpd',
            moduleName: CORE,
        };
        Identifiers.RegisterModuleFactoryFn = {
            name: 'ɵregisterModuleFactory',
            moduleName: CORE,
        };
        Identifiers.inject = { name: 'inject', moduleName: CORE };
        Identifiers.INJECTOR = { name: 'INJECTOR', moduleName: CORE };
        Identifiers.Injector = { name: 'Injector', moduleName: CORE };
        Identifiers.defineInjectable = { name: 'defineInjectable', moduleName: CORE };
        Identifiers.InjectableDef = { name: 'ɵInjectableDef', moduleName: CORE };
        Identifiers.ViewEncapsulation = {
            name: 'ViewEncapsulation',
            moduleName: CORE,
        };
        Identifiers.ChangeDetectionStrategy = {
            name: 'ChangeDetectionStrategy',
            moduleName: CORE,
        };
        Identifiers.SecurityContext = {
            name: 'SecurityContext',
            moduleName: CORE,
        };
        Identifiers.LOCALE_ID = { name: 'LOCALE_ID', moduleName: CORE };
        Identifiers.TRANSLATIONS_FORMAT = {
            name: 'TRANSLATIONS_FORMAT',
            moduleName: CORE,
        };
        Identifiers.inlineInterpolate = {
            name: 'ɵinlineInterpolate',
            moduleName: CORE,
        };
        Identifiers.interpolate = { name: 'ɵinterpolate', moduleName: CORE };
        Identifiers.EMPTY_ARRAY = { name: 'ɵEMPTY_ARRAY', moduleName: CORE };
        Identifiers.EMPTY_MAP = { name: 'ɵEMPTY_MAP', moduleName: CORE };
        Identifiers.Renderer = { name: 'Renderer', moduleName: CORE };
        Identifiers.viewDef = { name: 'ɵvid', moduleName: CORE };
        Identifiers.elementDef = { name: 'ɵeld', moduleName: CORE };
        Identifiers.anchorDef = { name: 'ɵand', moduleName: CORE };
        Identifiers.textDef = { name: 'ɵted', moduleName: CORE };
        Identifiers.directiveDef = { name: 'ɵdid', moduleName: CORE };
        Identifiers.providerDef = { name: 'ɵprd', moduleName: CORE };
        Identifiers.queryDef = { name: 'ɵqud', moduleName: CORE };
        Identifiers.pureArrayDef = { name: 'ɵpad', moduleName: CORE };
        Identifiers.pureObjectDef = { name: 'ɵpod', moduleName: CORE };
        Identifiers.purePipeDef = { name: 'ɵppd', moduleName: CORE };
        Identifiers.pipeDef = { name: 'ɵpid', moduleName: CORE };
        Identifiers.nodeValue = { name: 'ɵnov', moduleName: CORE };
        Identifiers.ngContentDef = { name: 'ɵncd', moduleName: CORE };
        Identifiers.unwrapValue = { name: 'ɵunv', moduleName: CORE };
        Identifiers.createRendererType2 = { name: 'ɵcrt', moduleName: CORE };
        // type only
        Identifiers.RendererType2 = {
            name: 'RendererType2',
            moduleName: CORE,
        };
        // type only
        Identifiers.ViewDefinition = {
            name: 'ɵViewDefinition',
            moduleName: CORE,
        };
        Identifiers.createComponentFactory = { name: 'ɵccf', moduleName: CORE };
        Identifiers.setClassMetadata = { name: 'ɵsetClassMetadata', moduleName: CORE };
        return Identifiers;
    }());
    exports.Identifiers = Identifiers;
    function createTokenForReference(reference) {
        return { identifier: { reference: reference } };
    }
    exports.createTokenForReference = createTokenForReference;
    function createTokenForExternalReference(reflector, reference) {
        return createTokenForReference(reflector.resolveExternalReference(reference));
    }
    exports.createTokenForExternalReference = createTokenForExternalReference;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFNSCxJQUFNLElBQUksR0FBRyxlQUFlLENBQUM7SUFFN0I7UUFBQTtRQWdIQSxDQUFDO1FBL0dRLHdDQUE0QixHQUF3QjtZQUN6RCxJQUFJLEVBQUUsOEJBQThCO1lBQ3BDLFVBQVUsRUFBRSxJQUFJO1NBRWpCLENBQUM7UUFDSyxzQkFBVSxHQUF3QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3pFLHVCQUFXLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDM0UsNEJBQWdCLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNyRiw2QkFBaUIsR0FBd0I7WUFDOUMsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixVQUFVLEVBQUUsSUFBSTtTQUVqQixDQUFDO1FBQ0sscUJBQVMsR0FBd0IsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUN2RSx1QkFBVyxHQUF3QixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQzNFLHFCQUFTLEdBQXdCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDdkUsMkNBQStCLEdBQXdCO1lBQzVELElBQUksRUFBRSxrQ0FBa0M7WUFDeEMsVUFBVSxFQUFFLElBQUk7U0FFakIsQ0FBQztRQUNLLG9DQUF3QixHQUF3QjtZQUNyRCxJQUFJLEVBQUUsMEJBQTBCO1lBQ2hD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LElBQUksRUFBRSxpQkFBaUI7WUFDdkIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUNLLGtDQUFzQixHQUF3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQy9FLDRCQUFnQixHQUF3QixFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDL0Ysa0JBQUM7S0FBQSxBQWhIRCxJQWdIQztJQWhIWSxrQ0FBVztJQWtIeEIsU0FBZ0IsdUJBQXVCLENBQUMsU0FBYztRQUNwRCxPQUFPLEVBQUMsVUFBVSxFQUFFLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxFQUFDLENBQUM7SUFDOUMsQ0FBQztJQUZELDBEQUVDO0lBRUQsU0FBZ0IsK0JBQStCLENBQzNDLFNBQTJCLEVBQUUsU0FBOEI7UUFDN0QsT0FBTyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBSEQsMEVBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3J9IGZyb20gJy4vY29tcGlsZV9yZWZsZWN0b3InO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuL291dHB1dC9vdXRwdXRfYXN0JztcblxuY29uc3QgQ09SRSA9ICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJzIHtcbiAgc3RhdGljIEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFM6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0FOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIEVsZW1lbnRSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ0VsZW1lbnRSZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIE5nTW9kdWxlUmVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdOZ01vZHVsZVJlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgVmlld0NvbnRhaW5lclJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnVmlld0NvbnRhaW5lclJlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0b3JSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdG9yUmVmJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBRdWVyeUxpc3Q6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ1F1ZXJ5TGlzdCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgVGVtcGxhdGVSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ1RlbXBsYXRlUmVmJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBSZW5kZXJlcjI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ1JlbmRlcmVyMicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgQ29kZWdlbkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVDb2RlZ2VuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgQ29tcG9uZW50RmFjdG9yeTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnQ29tcG9uZW50RmFjdG9yeScsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgQ29tcG9uZW50UmVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdDb21wb25lbnRSZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIE5nTW9kdWxlRmFjdG9yeTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnTmdNb2R1bGVGYWN0b3J5JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBjcmVhdGVNb2R1bGVGYWN0b3J5OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtWNtZicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgbW9kdWxlRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtW1vZCcsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgbW9kdWxlUHJvdmlkZXJEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1bXBkJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBSZWdpc3Rlck1vZHVsZUZhY3RvcnlGbjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVyZWdpc3Rlck1vZHVsZUZhY3RvcnknLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIGluamVjdDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnaW5qZWN0JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBJTkpFQ1RPUjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnSU5KRUNUT1InLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIEluamVjdG9yOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdJbmplY3RvcicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgZGVmaW5lSW5qZWN0YWJsZTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnZGVmaW5lSW5qZWN0YWJsZScsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgSW5qZWN0YWJsZURlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVJbmplY3RhYmxlRGVmJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBWaWV3RW5jYXBzdWxhdGlvbjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnVmlld0VuY2Fwc3VsYXRpb24nLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIENoYW5nZURldGVjdGlvblN0cmF0ZWd5OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneScsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgU2VjdXJpdHlDb250ZXh0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdTZWN1cml0eUNvbnRleHQnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIExPQ0FMRV9JRDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnTE9DQUxFX0lEJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBUUkFOU0xBVElPTlNfRk9STUFUOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdUUkFOU0xBVElPTlNfRk9STUFUJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBpbmxpbmVJbnRlcnBvbGF0ZTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVpbmxpbmVJbnRlcnBvbGF0ZScsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcbiAgc3RhdGljIGludGVycG9sYXRlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWludGVycG9sYXRlJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBFTVBUWV9BUlJBWTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVFTVBUWV9BUlJBWScsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgRU1QVFlfTUFQOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtUVNUFRZX01BUCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgUmVuZGVyZXI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ1JlbmRlcmVyJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyB2aWV3RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXZpZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgZWxlbWVudERlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVlbGQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGFuY2hvckRlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVhbmQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHRleHREZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dGVkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBkaXJlY3RpdmVEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZGlkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwcm92aWRlckRlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVwcmQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHF1ZXJ5RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXF1ZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZUFycmF5RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBhZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZU9iamVjdERlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVwb2QnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHB1cmVQaXBlRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBwZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcGlwZURlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVwaWQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIG5vZGVWYWx1ZTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVub3YnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIG5nQ29udGVudERlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVuY2QnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHVud3JhcFZhbHVlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXVudicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgY3JlYXRlUmVuZGVyZXJUeXBlMjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVjcnQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgLy8gdHlwZSBvbmx5XG4gIHN0YXRpYyBSZW5kZXJlclR5cGUyOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdSZW5kZXJlclR5cGUyJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIC8vIHR5cGUgb25seVxuICBzdGF0aWMgVmlld0RlZmluaXRpb246IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1Vmlld0RlZmluaXRpb24nLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG4gIH07XG4gIHN0YXRpYyBjcmVhdGVDb21wb25lbnRGYWN0b3J5OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWNjZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgc2V0Q2xhc3NNZXRhZGF0YTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVzZXRDbGFzc01ldGFkYXRhJywgbW9kdWxlTmFtZTogQ09SRX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2tlbkZvclJlZmVyZW5jZShyZWZlcmVuY2U6IGFueSk6IENvbXBpbGVUb2tlbk1ldGFkYXRhIHtcbiAgcmV0dXJuIHtpZGVudGlmaWVyOiB7cmVmZXJlbmNlOiByZWZlcmVuY2V9fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRva2VuRm9yRXh0ZXJuYWxSZWZlcmVuY2UoXG4gICAgcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yLCByZWZlcmVuY2U6IG8uRXh0ZXJuYWxSZWZlcmVuY2UpOiBDb21waWxlVG9rZW5NZXRhZGF0YSB7XG4gIHJldHVybiBjcmVhdGVUb2tlbkZvclJlZmVyZW5jZShyZWZsZWN0b3IucmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKHJlZmVyZW5jZSkpO1xufVxuIl19