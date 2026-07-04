"""Inventory helpers for the project scaffold."""


def calculate_stock_level(quantity_on_hand: int, reorder_point: int) -> str:
    if quantity_on_hand <= reorder_point:
        return "reorder"
    return "ok"