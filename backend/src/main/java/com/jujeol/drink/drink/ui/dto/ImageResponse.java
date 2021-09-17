package com.jujeol.drink.drink.ui.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class ImageResponse {

    private String small;
    private String medium;
    private String large;

    public static ImageResponse create(String small, String medium, String large) {
        return new ImageResponse(small, medium, large);
    }
}
