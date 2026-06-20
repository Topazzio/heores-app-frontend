import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test, vi} from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { usePaginateHero } from "./usePaginateHero";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";


vi.mock("../actions/get-heroes-by-page.action",()=>({
    getHeroesByPageAction:vi.fn()
}))


const mockGetHeroesByPageAction = vi.mocked(getHeroesByPageAction)

const tanStackCustomProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

    return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('usePaginateHero',()=>{

  test("should return the initial state (isloading)", () => {
    const { result } = renderHook(() => usePaginateHero(1,6), {
      wrapper: tanStackCustomProvider(),
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBe(undefined);
    expect(result.current.data).toBeUndefined();
  });


  test('should return succes state with data when API call succeds', async () => {
    const { result } = renderHook(() => usePaginateHero(1,6), {
      wrapper: tanStackCustomProvider(),
    });

    await waitFor(() => {
        expect(result.current.isSuccess)
    })



   })


})

