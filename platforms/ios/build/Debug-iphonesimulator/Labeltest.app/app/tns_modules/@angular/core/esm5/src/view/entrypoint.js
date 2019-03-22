/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { Injector } from '../di/injector';
import { NgModuleFactory } from '../linker/ng_module_factory';
import { initServicesIfNeeded } from './services';
import { Services } from './types';
import { resolveDefinition } from './util';
export function overrideProvider(override) {
    initServicesIfNeeded();
    return Services.overrideProvider(override);
}
export function overrideComponentView(comp, componentFactory) {
    initServicesIfNeeded();
    return Services.overrideComponentView(comp, componentFactory);
}
export function clearOverrides() {
    initServicesIfNeeded();
    return Services.clearOverrides();
}
// Attention: this function is called as top level function.
// Putting any logic in here will destroy closure tree shaking!
export function createNgModuleFactory(ngModuleType, bootstrapComponents, defFactory) {
    return new NgModuleFactory_(ngModuleType, bootstrapComponents, defFactory);
}
function cloneNgModuleDefinition(def) {
    var providers = Array.from(def.providers);
    var modules = Array.from(def.modules);
    var providersByKey = {};
    for (var key in def.providersByKey) {
        providersByKey[key] = def.providersByKey[key];
    }
    return {
        factory: def.factory,
        isRoot: def.isRoot, providers: providers, modules: modules, providersByKey: providersByKey,
    };
}
var NgModuleFactory_ = /** @class */ (function (_super) {
    tslib_1.__extends(NgModuleFactory_, _super);
    function NgModuleFactory_(moduleType, _bootstrapComponents, _ngModuleDefFactory) {
        var _this = 
        // Attention: this ctor is called as top level function.
        // Putting any logic in here will destroy closure tree shaking!
        _super.call(this) || this;
        _this.moduleType = moduleType;
        _this._bootstrapComponents = _bootstrapComponents;
        _this._ngModuleDefFactory = _ngModuleDefFactory;
        return _this;
    }
    NgModuleFactory_.prototype.create = function (parentInjector) {
        initServicesIfNeeded();
        // Clone the NgModuleDefinition so that any tree shakeable provider definition
        // added to this instance of the NgModuleRef doesn't affect the cached copy.
        // See https://github.com/angular/angular/issues/25018.
        var def = cloneNgModuleDefinition(resolveDefinition(this._ngModuleDefFactory));
        return Services.createNgModuleRef(this.moduleType, parentInjector || Injector.NULL, this._bootstrapComponents, def);
    };
    return NgModuleFactory_;
}(NgModuleFactory));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnlwb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3ZpZXcvZW50cnlwb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBQyxlQUFlLEVBQWMsTUFBTSw2QkFBNkIsQ0FBQztBQUd6RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEQsT0FBTyxFQUF1RixRQUFRLEVBQWlCLE1BQU0sU0FBUyxDQUFDO0FBQ3ZJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUV6QyxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsUUFBMEI7SUFDekQsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLElBQWUsRUFBRSxnQkFBdUM7SUFDNUYsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixPQUFPLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBRUQsTUFBTSxVQUFVLGNBQWM7SUFDNUIsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixPQUFPLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBRUQsNERBQTREO0FBQzVELCtEQUErRDtBQUMvRCxNQUFNLFVBQVUscUJBQXFCLENBQ2pDLFlBQXVCLEVBQUUsbUJBQWdDLEVBQ3pELFVBQXFDO0lBQ3ZDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQUVELFNBQVMsdUJBQXVCLENBQUMsR0FBdUI7SUFDdEQsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsSUFBTSxjQUFjLEdBQThDLEVBQUUsQ0FBQztJQUNyRSxLQUFLLElBQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUU7UUFDcEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0M7SUFFRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1FBQ3BCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsV0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLGNBQWMsZ0JBQUE7S0FDdkQsQ0FBQztBQUNKLENBQUM7QUFFRDtJQUErQiw0Q0FBb0I7SUFDakQsMEJBQ29CLFVBQXFCLEVBQVUsb0JBQWlDLEVBQ3hFLG1CQUE4QztRQUYxRDtRQUdFLHdEQUF3RDtRQUN4RCwrREFBK0Q7UUFDL0QsaUJBQU8sU0FDUjtRQUxtQixnQkFBVSxHQUFWLFVBQVUsQ0FBVztRQUFVLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBYTtRQUN4RSx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQTJCOztJQUkxRCxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLGNBQTZCO1FBQ2xDLG9CQUFvQixFQUFFLENBQUM7UUFDdkIsOEVBQThFO1FBQzlFLDRFQUE0RTtRQUM1RSx1REFBdUQ7UUFDdkQsSUFBTSxHQUFHLEdBQUcsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUNqRixPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsQ0FDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWxCRCxDQUErQixlQUFlLEdBa0I3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi4vZGkvaW5qZWN0b3InO1xuaW1wb3J0IHtDb21wb25lbnRGYWN0b3J5fSBmcm9tICcuLi9saW5rZXIvY29tcG9uZW50X2ZhY3RvcnknO1xuaW1wb3J0IHtOZ01vZHVsZUZhY3RvcnksIE5nTW9kdWxlUmVmfSBmcm9tICcuLi9saW5rZXIvbmdfbW9kdWxlX2ZhY3RvcnknO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi90eXBlJztcblxuaW1wb3J0IHtpbml0U2VydmljZXNJZk5lZWRlZH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQge05nTW9kdWxlRGVmaW5pdGlvbiwgTmdNb2R1bGVEZWZpbml0aW9uRmFjdG9yeSwgTmdNb2R1bGVQcm92aWRlckRlZiwgUHJvdmlkZXJPdmVycmlkZSwgU2VydmljZXMsIFZpZXdEZWZpbml0aW9ufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7cmVzb2x2ZURlZmluaXRpb259IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVycmlkZVByb3ZpZGVyKG92ZXJyaWRlOiBQcm92aWRlck92ZXJyaWRlKSB7XG4gIGluaXRTZXJ2aWNlc0lmTmVlZGVkKCk7XG4gIHJldHVybiBTZXJ2aWNlcy5vdmVycmlkZVByb3ZpZGVyKG92ZXJyaWRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJyaWRlQ29tcG9uZW50Vmlldyhjb21wOiBUeXBlPGFueT4sIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8YW55Pikge1xuICBpbml0U2VydmljZXNJZk5lZWRlZCgpO1xuICByZXR1cm4gU2VydmljZXMub3ZlcnJpZGVDb21wb25lbnRWaWV3KGNvbXAsIGNvbXBvbmVudEZhY3RvcnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJPdmVycmlkZXMoKSB7XG4gIGluaXRTZXJ2aWNlc0lmTmVlZGVkKCk7XG4gIHJldHVybiBTZXJ2aWNlcy5jbGVhck92ZXJyaWRlcygpO1xufVxuXG4vLyBBdHRlbnRpb246IHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFzIHRvcCBsZXZlbCBmdW5jdGlvbi5cbi8vIFB1dHRpbmcgYW55IGxvZ2ljIGluIGhlcmUgd2lsbCBkZXN0cm95IGNsb3N1cmUgdHJlZSBzaGFraW5nIVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5nTW9kdWxlRmFjdG9yeShcbiAgICBuZ01vZHVsZVR5cGU6IFR5cGU8YW55PiwgYm9vdHN0cmFwQ29tcG9uZW50czogVHlwZTxhbnk+W10sXG4gICAgZGVmRmFjdG9yeTogTmdNb2R1bGVEZWZpbml0aW9uRmFjdG9yeSk6IE5nTW9kdWxlRmFjdG9yeTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBOZ01vZHVsZUZhY3RvcnlfKG5nTW9kdWxlVHlwZSwgYm9vdHN0cmFwQ29tcG9uZW50cywgZGVmRmFjdG9yeSk7XG59XG5cbmZ1bmN0aW9uIGNsb25lTmdNb2R1bGVEZWZpbml0aW9uKGRlZjogTmdNb2R1bGVEZWZpbml0aW9uKTogTmdNb2R1bGVEZWZpbml0aW9uIHtcbiAgY29uc3QgcHJvdmlkZXJzID0gQXJyYXkuZnJvbShkZWYucHJvdmlkZXJzKTtcbiAgY29uc3QgbW9kdWxlcyA9IEFycmF5LmZyb20oZGVmLm1vZHVsZXMpO1xuICBjb25zdCBwcm92aWRlcnNCeUtleToge1t0b2tlbktleTogc3RyaW5nXTogTmdNb2R1bGVQcm92aWRlckRlZn0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGVmLnByb3ZpZGVyc0J5S2V5KSB7XG4gICAgcHJvdmlkZXJzQnlLZXlba2V5XSA9IGRlZi5wcm92aWRlcnNCeUtleVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmYWN0b3J5OiBkZWYuZmFjdG9yeSxcbiAgICBpc1Jvb3Q6IGRlZi5pc1Jvb3QsIHByb3ZpZGVycywgbW9kdWxlcywgcHJvdmlkZXJzQnlLZXksXG4gIH07XG59XG5cbmNsYXNzIE5nTW9kdWxlRmFjdG9yeV8gZXh0ZW5kcyBOZ01vZHVsZUZhY3Rvcnk8YW55PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHJlYWRvbmx5IG1vZHVsZVR5cGU6IFR5cGU8YW55PiwgcHJpdmF0ZSBfYm9vdHN0cmFwQ29tcG9uZW50czogVHlwZTxhbnk+W10sXG4gICAgICBwcml2YXRlIF9uZ01vZHVsZURlZkZhY3Rvcnk6IE5nTW9kdWxlRGVmaW5pdGlvbkZhY3RvcnkpIHtcbiAgICAvLyBBdHRlbnRpb246IHRoaXMgY3RvciBpcyBjYWxsZWQgYXMgdG9wIGxldmVsIGZ1bmN0aW9uLlxuICAgIC8vIFB1dHRpbmcgYW55IGxvZ2ljIGluIGhlcmUgd2lsbCBkZXN0cm95IGNsb3N1cmUgdHJlZSBzaGFraW5nIVxuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjcmVhdGUocGFyZW50SW5qZWN0b3I6IEluamVjdG9yfG51bGwpOiBOZ01vZHVsZVJlZjxhbnk+IHtcbiAgICBpbml0U2VydmljZXNJZk5lZWRlZCgpO1xuICAgIC8vIENsb25lIHRoZSBOZ01vZHVsZURlZmluaXRpb24gc28gdGhhdCBhbnkgdHJlZSBzaGFrZWFibGUgcHJvdmlkZXIgZGVmaW5pdGlvblxuICAgIC8vIGFkZGVkIHRvIHRoaXMgaW5zdGFuY2Ugb2YgdGhlIE5nTW9kdWxlUmVmIGRvZXNuJ3QgYWZmZWN0IHRoZSBjYWNoZWQgY29weS5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjUwMTguXG4gICAgY29uc3QgZGVmID0gY2xvbmVOZ01vZHVsZURlZmluaXRpb24ocmVzb2x2ZURlZmluaXRpb24odGhpcy5fbmdNb2R1bGVEZWZGYWN0b3J5KSk7XG4gICAgcmV0dXJuIFNlcnZpY2VzLmNyZWF0ZU5nTW9kdWxlUmVmKFxuICAgICAgICB0aGlzLm1vZHVsZVR5cGUsIHBhcmVudEluamVjdG9yIHx8IEluamVjdG9yLk5VTEwsIHRoaXMuX2Jvb3RzdHJhcENvbXBvbmVudHMsIGRlZik7XG4gIH1cbn1cbiJdfQ==