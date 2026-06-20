import { renderHook, waitFor } from "@testing-library/react";
<<<<<<< Updated upstream
import { describe, expect, test, vi} from "vitest";
=======
import { beforeEach, describe, expect, test, vi } from "vitest";
>>>>>>> Stashed changes
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { usePaginateHero } from "./usePaginateHero";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

<<<<<<< Updated upstream

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
=======
vi.mock("../actions/get-heroes-by-page.action", () => ({
  getHeroesByPageAction: vi.fn(),
}));

const mockGetHeroesByPageAction = vi.mocked(getHeroesByPageAction);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const tanStackCustomProvider = () => {
  return ({ children }: PropsWithChildren) => (
>>>>>>> Stashed changes
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

<<<<<<< Updated upstream
describe('usePaginateHero',()=>{

  test("should return the initial state (isloading)", () => {
    const { result } = renderHook(() => usePaginateHero(1,6), {
=======
describe("usePaginateHero", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
  });

  test("should return the initial state (isloading)", () => {
    const { result } = renderHook(() => usePaginateHero(1, 6), {
>>>>>>> Stashed changes
      wrapper: tanStackCustomProvider(),
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBe(undefined);
    expect(result.current.data).toBeUndefined();
  });

<<<<<<< Updated upstream

  test('should return succes state with data when API call succeds', async () => {
    const { result } = renderHook(() => usePaginateHero(1,6), {
=======
  test("should return succes state with data when API call succeeds", async () => {
    const mockHeroesData = {
      total: 20,
      pages: 4,
      heroes: [],
    };

    mockGetHeroesByPageAction.mockResolvedValue(mockHeroesData);

    const { result } = renderHook(() => usePaginateHero(1, 6), {
>>>>>>> Stashed changes
      wrapper: tanStackCustomProvider(),
    });

    await waitFor(() => {
<<<<<<< Updated upstream
        expect(result.current.isSuccess)
    })



   })


})

=======
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.status).toBe("success");
    expect(mockGetHeroesByPageAction).toHaveBeenCalled;
    expect(mockGetHeroesByPageAction).toHaveBeenCalledWith(1, 6, "all");
  });

  test("should call getHeroesByPageActions with arguments", async () => {
    const mockHeroesData = {
      total: 20,
      pages: 4,
      heroes: [],
    };

    mockGetHeroesByPageAction.mockResolvedValue(mockHeroesData);

    const { result } = renderHook(() => usePaginateHero(1, 6, "heroesABC"), {
      wrapper: tanStackCustomProvider(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.status).toBe("success");
    expect(mockGetHeroesByPageAction).toHaveBeenCalled;
    expect(mockGetHeroesByPageAction).toHaveBeenCalledWith(1, 6, "heroesABC");
  });
});
>>>>>>> Stashed changes
