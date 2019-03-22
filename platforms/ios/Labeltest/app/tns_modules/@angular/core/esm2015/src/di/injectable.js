/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { compileInjectable as render3CompileInjectable } from '../render3/jit/injectable';
import { makeDecorator } from '../util/decorators';
import { defineInjectable, getInjectableDef } from './defs';
import { convertInjectableProviderToFactory } from './util';
/**
 * Type of the Injectable decorator / constructor function.
 *
 * \@publicApi
 * @record
 */
export function InjectableDecorator() { }
// WARNING: interface has both a type and a value, skipping emit
/**
 * Injectable decorator and metadata.
 *
 * \@Annotation
 * \@publicApi
 * @type {?}
 */
export const Injectable = makeDecorator('Injectable', undefined, undefined, undefined, (type, meta) => SWITCH_COMPILE_INJECTABLE((/** @type {?} */ (type)), meta));
/**
 * Type representing injectable service.
 *
 * \@publicApi
 * @record
 * @template T
 */
export function InjectableType() { }
if (false) {
    /** @type {?} */
    InjectableType.prototype.ngInjectableDef;
}
/**
 * Supports \@Injectable() in JIT mode for Render2.
 * @param {?} injectableType
 * @param {?} options
 * @return {?}
 */
function render2CompileInjectable(injectableType, options) {
    if (options && options.providedIn !== undefined && !getInjectableDef(injectableType)) {
        /** @nocollapse */ injectableType.ngInjectableDef = defineInjectable({
            providedIn: options.providedIn,
            factory: convertInjectableProviderToFactory(injectableType, options),
        });
    }
}
/** @type {?} */
export const SWITCH_COMPILE_INJECTABLE__POST_R3__ = render3CompileInjectable;
/** @type {?} */
const SWITCH_COMPILE_INJECTABLE__PRE_R3__ = render2CompileInjectable;
/** @type {?} */
const SWITCH_COMPILE_INJECTABLE = SWITCH_COMPILE_INJECTABLE__PRE_R3__;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2luamVjdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsaUJBQWlCLElBQUksd0JBQXdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RixPQUFPLEVBQWdCLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRWhFLE9BQU8sRUFBZ0MsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFekYsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0FBZ0IxRCx5Q0FxQkM7Ozs7Ozs7OztBQWVELE1BQU0sT0FBTyxVQUFVLEdBQXdCLGFBQWEsQ0FDeEQsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUM3QyxDQUFDLElBQWUsRUFBRSxJQUFnQixFQUFFLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7QUFPeEYsb0NBQXlGOzs7SUFBcEMseUNBQWtDOzs7Ozs7OztBQUt2RixTQUFTLHdCQUF3QixDQUM3QixjQUFtQyxFQUNuQyxPQUFxRTtJQUN2RSxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ3BGLGNBQWMsQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7WUFDaEQsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO1lBQzlCLE9BQU8sRUFBRSxrQ0FBa0MsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDO1NBQ3JFLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sb0NBQW9DLEdBQUcsd0JBQXdCOztNQUN0RSxtQ0FBbUMsR0FBRyx3QkFBd0I7O01BQzlELHlCQUF5QixHQUMzQixtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y29tcGlsZUluamVjdGFibGUgYXMgcmVuZGVyM0NvbXBpbGVJbmplY3RhYmxlfSBmcm9tICcuLi9yZW5kZXIzL2ppdC9pbmplY3RhYmxlJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vdHlwZSc7XG5pbXBvcnQge1R5cGVEZWNvcmF0b3IsIG1ha2VEZWNvcmF0b3J9IGZyb20gJy4uL3V0aWwvZGVjb3JhdG9ycyc7XG5cbmltcG9ydCB7SW5qZWN0YWJsZURlZiwgSW5qZWN0YWJsZVR5cGUsIGRlZmluZUluamVjdGFibGUsIGdldEluamVjdGFibGVEZWZ9IGZyb20gJy4vZGVmcyc7XG5pbXBvcnQge0NsYXNzU2Fuc1Byb3ZpZGVyLCBDb25zdHJ1Y3RvclNhbnNQcm92aWRlciwgRXhpc3RpbmdTYW5zUHJvdmlkZXIsIEZhY3RvcnlTYW5zUHJvdmlkZXIsIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyLCBWYWx1ZVNhbnNQcm92aWRlcn0gZnJvbSAnLi9wcm92aWRlcic7XG5pbXBvcnQge2NvbnZlcnRJbmplY3RhYmxlUHJvdmlkZXJUb0ZhY3Rvcnl9IGZyb20gJy4vdXRpbCc7XG5cblxuLyoqXG4gKiBJbmplY3RhYmxlIHByb3ZpZGVycyB1c2VkIGluIGBASW5qZWN0YWJsZWAgZGVjb3JhdG9yLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgSW5qZWN0YWJsZVByb3ZpZGVyID0gVmFsdWVTYW5zUHJvdmlkZXIgfCBFeGlzdGluZ1NhbnNQcm92aWRlciB8XG4gICAgU3RhdGljQ2xhc3NTYW5zUHJvdmlkZXIgfCBDb25zdHJ1Y3RvclNhbnNQcm92aWRlciB8IEZhY3RvcnlTYW5zUHJvdmlkZXIgfCBDbGFzc1NhbnNQcm92aWRlcjtcblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBJbmplY3RhYmxlIGRlY29yYXRvciAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmplY3RhYmxlRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIEEgbWFya2VyIG1ldGFkYXRhIHRoYXQgbWFya3MgYSBjbGFzcyBhcyBhdmFpbGFibGUgdG8gYEluamVjdG9yYCBmb3IgY3JlYXRpb24uXG4gICAqXG4gICAqIEZvciBtb3JlIGRldGFpbHMsIHNlZSB0aGUgW1wiRGVwZW5kZW5jeSBJbmplY3Rpb24gR3VpZGVcIl0oZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24pLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiB7QGV4YW1wbGUgY29yZS9kaS90cy9tZXRhZGF0YV9zcGVjLnRzIHJlZ2lvbj0nSW5qZWN0YWJsZSd9XG4gICAqXG4gICAqIGBJbmplY3RvcmAgd2lsbCB0aHJvdyBhbiBlcnJvciB3aGVuIHRyeWluZyB0byBpbnN0YW50aWF0ZSBhIGNsYXNzIHRoYXRcbiAgICogZG9lcyBub3QgaGF2ZSBgQEluamVjdGFibGVgIG1hcmtlciwgYXMgc2hvd24gaW4gdGhlIGV4YW1wbGUgYmVsb3cuXG4gICAqXG4gICAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL21ldGFkYXRhX3NwZWMudHMgcmVnaW9uPSdJbmplY3RhYmxlVGhyb3dzJ31cbiAgICpcbiAgICovXG4gICgpOiBUeXBlRGVjb3JhdG9yO1xuICAob3B0aW9ucz86IHtwcm92aWRlZEluOiBUeXBlPGFueT58ICdyb290JyB8IG51bGx9JkluamVjdGFibGVQcm92aWRlcik6IFR5cGVEZWNvcmF0b3I7XG4gIG5ldyAoKTogSW5qZWN0YWJsZTtcbiAgbmV3IChvcHRpb25zPzoge3Byb3ZpZGVkSW46IFR5cGU8YW55PnwgJ3Jvb3QnIHwgbnVsbH0mSW5qZWN0YWJsZVByb3ZpZGVyKTogSW5qZWN0YWJsZTtcbn1cblxuLyoqXG4gKiBUeXBlIG9mIHRoZSBJbmplY3RhYmxlIG1ldGFkYXRhLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmplY3RhYmxlIHsgcHJvdmlkZWRJbj86IFR5cGU8YW55Pnwncm9vdCd8bnVsbDsgfVxuXG4vKipcbiAqIEluamVjdGFibGUgZGVjb3JhdG9yIGFuZCBtZXRhZGF0YS5cbiAqXG4gKiBAQW5ub3RhdGlvblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgSW5qZWN0YWJsZTogSW5qZWN0YWJsZURlY29yYXRvciA9IG1ha2VEZWNvcmF0b3IoXG4gICAgJ0luamVjdGFibGUnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLFxuICAgICh0eXBlOiBUeXBlPGFueT4sIG1ldGE6IEluamVjdGFibGUpID0+IFNXSVRDSF9DT01QSUxFX0lOSkVDVEFCTEUodHlwZSBhcyBhbnksIG1ldGEpKTtcblxuLyoqXG4gKiBUeXBlIHJlcHJlc2VudGluZyBpbmplY3RhYmxlIHNlcnZpY2UuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdGFibGVUeXBlPFQ+IGV4dGVuZHMgVHlwZTxUPiB7IG5nSW5qZWN0YWJsZURlZjogSW5qZWN0YWJsZURlZjxUPjsgfVxuXG4vKipcbiAqIFN1cHBvcnRzIEBJbmplY3RhYmxlKCkgaW4gSklUIG1vZGUgZm9yIFJlbmRlcjIuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlcjJDb21waWxlSW5qZWN0YWJsZShcbiAgICBpbmplY3RhYmxlVHlwZTogSW5qZWN0YWJsZVR5cGU8YW55PixcbiAgICBvcHRpb25zOiB7cHJvdmlkZWRJbj86IFR5cGU8YW55PnwgJ3Jvb3QnIHwgbnVsbH0gJiBJbmplY3RhYmxlUHJvdmlkZXIpOiB2b2lkIHtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcm92aWRlZEluICE9PSB1bmRlZmluZWQgJiYgIWdldEluamVjdGFibGVEZWYoaW5qZWN0YWJsZVR5cGUpKSB7XG4gICAgaW5qZWN0YWJsZVR5cGUubmdJbmplY3RhYmxlRGVmID0gZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgICBwcm92aWRlZEluOiBvcHRpb25zLnByb3ZpZGVkSW4sXG4gICAgICBmYWN0b3J5OiBjb252ZXJ0SW5qZWN0YWJsZVByb3ZpZGVyVG9GYWN0b3J5KGluamVjdGFibGVUeXBlLCBvcHRpb25zKSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgU1dJVENIX0NPTVBJTEVfSU5KRUNUQUJMRV9fUE9TVF9SM19fID0gcmVuZGVyM0NvbXBpbGVJbmplY3RhYmxlO1xuY29uc3QgU1dJVENIX0NPTVBJTEVfSU5KRUNUQUJMRV9fUFJFX1IzX18gPSByZW5kZXIyQ29tcGlsZUluamVjdGFibGU7XG5jb25zdCBTV0lUQ0hfQ09NUElMRV9JTkpFQ1RBQkxFOiB0eXBlb2YgcmVuZGVyM0NvbXBpbGVJbmplY3RhYmxlID1cbiAgICBTV0lUQ0hfQ09NUElMRV9JTkpFQ1RBQkxFX19QUkVfUjNfXztcbiJdfQ==