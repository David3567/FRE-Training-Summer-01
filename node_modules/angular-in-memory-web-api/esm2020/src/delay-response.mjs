/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
// Replaces use of RxJS delay. See v0.5.4.
/** adds specified delay (in ms) to both next and error channels of the response observable */
export function delayResponse(response$, delayMs) {
    return new Observable(observer => {
        let completePending = false;
        let nextPending = false;
        const subscription = response$.subscribe(value => {
            nextPending = true;
            setTimeout(() => {
                observer.next(value);
                if (completePending) {
                    observer.complete();
                }
            }, delayMs);
        }, error => setTimeout(() => observer.error(error), delayMs), () => {
            completePending = true;
            if (!nextPending) {
                observer.complete();
            }
        });
        return () => {
            return subscription.unsubscribe();
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9taXNjL2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGkvc3JjL2RlbGF5LXJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFaEMsMENBQTBDO0FBQzFDLDhGQUE4RjtBQUM5RixNQUFNLFVBQVUsYUFBYSxDQUFJLFNBQXdCLEVBQUUsT0FBZTtJQUN4RSxPQUFPLElBQUksVUFBVSxDQUFJLFFBQVEsQ0FBQyxFQUFFO1FBQ2xDLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDeEIsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FDcEMsS0FBSyxDQUFDLEVBQUU7WUFDTixXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ25CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsSUFBSSxlQUFlLEVBQUU7b0JBQ25CLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckI7WUFDSCxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDZCxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsRUFDekQsR0FBRyxFQUFFO1lBQ0gsZUFBZSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbi8vIFJlcGxhY2VzIHVzZSBvZiBSeEpTIGRlbGF5LiBTZWUgdjAuNS40LlxuLyoqIGFkZHMgc3BlY2lmaWVkIGRlbGF5IChpbiBtcykgdG8gYm90aCBuZXh0IGFuZCBlcnJvciBjaGFubmVscyBvZiB0aGUgcmVzcG9uc2Ugb2JzZXJ2YWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5UmVzcG9uc2U8VD4ocmVzcG9uc2UkOiBPYnNlcnZhYmxlPFQ+LCBkZWxheU1zOiBudW1iZXIpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KG9ic2VydmVyID0+IHtcbiAgICBsZXQgY29tcGxldGVQZW5kaW5nID0gZmFsc2U7XG4gICAgbGV0IG5leHRQZW5kaW5nID0gZmFsc2U7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gcmVzcG9uc2UkLnN1YnNjcmliZShcbiAgICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgIG5leHRQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlUGVuZGluZykge1xuICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGRlbGF5TXMpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBzZXRUaW1lb3V0KCgpID0+IG9ic2VydmVyLmVycm9yKGVycm9yKSwgZGVsYXlNcyksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb21wbGV0ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIGlmICghbmV4dFBlbmRpbmcpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0pO1xufVxuIl19