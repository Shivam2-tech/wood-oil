"use client";

import { OilType } from "@/types/product";
import { oilTypes } from "@/data/products";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface ShopFiltersState {
  oilType: OilType | "all";
  minPrice: number;
  maxPrice: number;
  size: string;
}

interface ShopFiltersProps {
  filters: ShopFiltersState;
  onChange: (filters: ShopFiltersState) => void;
  availableSizes: string[];
  priceRange: { min: number; max: number };
  className?: string;
}

export function ShopFilters({
  filters,
  onChange,
  availableSizes,
  priceRange,
  className,
}: ShopFiltersProps) {
  return (
    <aside
      className={cn(
        "space-y-6 rounded-lg border border-brown/10 bg-white/40 p-5",
        className
      )}
    >
      <h3 className="font-display text-lg font-semibold">Filters</h3>

      <div className="space-y-2">
        <Label>Oil Type</Label>
        <Select
          value={filters.oilType}
          onValueChange={(value) =>
            onChange({
              ...filters,
              oilType: value as OilType | "all",
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {oilTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label>
          Price: ₹{filters.minPrice} – ₹{filters.maxPrice}
        </Label>
        <div className="space-y-2">
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step={50}
            value={filters.minPrice}
            onChange={(e) =>
              onChange({
                ...filters,
                minPrice: Math.min(Number(e.target.value), filters.maxPrice),
              })
            }
            className="w-full accent-gold"
            aria-label="Minimum price"
          />
          <input
            type="range"
            min={priceRange.min}
            max={priceRange.max}
            step={50}
            value={filters.maxPrice}
            onChange={(e) =>
              onChange({
                ...filters,
                maxPrice: Math.max(Number(e.target.value), filters.minPrice),
              })
            }
            className="w-full accent-gold"
            aria-label="Maximum price"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Size</Label>
        <Select
          value={filters.size}
          onValueChange={(value) => onChange({ ...filters, size: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="All sizes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sizes</SelectItem>
            {availableSizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
}
